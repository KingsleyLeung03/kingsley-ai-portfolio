# Dockerfile for Kingsley's AI Portfolio

# ---- Base ----
# Use the official Bun image as a base.
FROM oven/bun:1 AS base
WORKDIR /app

# ---- Dependencies ----
# Install dependencies in a separate layer to leverage Docker's caching.
# Make sure bun.lockb is present in your project root by running `bun install`
# and commit it to your repository.
FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# ---- Build ----
# Build the Next.js application.
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Use BuildKit secrets to handle the API key securely.
# This prevents the key from being leaked into the image layers.
RUN --mount=type=secret,id=gemini_api_key \
    GEMINI_API_KEY=$(cat /run/secrets/gemini_api_key) bun run build

# ---- Runner ----
# Create the final, smaller image to run the application.
FROM base AS runner
WORKDIR /app

# Set environment variables for production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# The standalone output doesn't include the .env file,
# so we don't need to copy it. It should be provided at runtime.

EXPOSE 3000
# Use `bun server.js` to run the standalone server file.
CMD ["bun", "server.js"]
