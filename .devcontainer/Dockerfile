FROM node:22-slim
RUN apt-get update && apt-get install -y git bash curl && rm -rf /var/lib/apt/lists/*
RUN groupadd -r agent && useradd -r -g agent -m agent
USER agent

WORKDIR /workspace

ENV NPM_CONFIG_PREFIX=/home/agent/.npm-global
ENV PATH="/home/agent/.npm-global/bin:${PATH}"

RUN npm install -g @anthropic-ai/claude-code

RUN git config --global include.path /home/agent/.gitconfig-host
RUN git config --global credential.helper '!f() { echo "username=x-access-token"; echo "password=$GITHUB_TOKEN"; }; f'