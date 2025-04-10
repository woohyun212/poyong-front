# Node.js LTS 버전 기반
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치 (캐시 최적화 위해 먼저 복사)
COPY package*.json ./
RUN npm install

# 전체 소스 복사
COPY . .

# 개발 모드 실행 (Vite dev server)
CMD ["npm", "run", "dev"]