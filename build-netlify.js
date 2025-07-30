#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Iniciando build para Netlify...');

try {
  // Executar o build do Vite
  console.log('📦 Executando vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  // Verificar se o diretório de build existe
  const buildDir = path.join(__dirname, 'dist', 'public');
  if (!fs.existsSync(buildDir)) {
    throw new Error('Diretório de build não encontrado');
  }
  
  // Remover referência ao script do Replit do HTML
  const htmlPath = path.join(buildDir, 'index.html');
  if (fs.existsSync(htmlPath)) {
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    htmlContent = htmlContent.replace(
      /<script[^>]*replit-dev-banner\.js[^>]*><\/script>/g, 
      ''
    );
    fs.writeFileSync(htmlPath, htmlContent);
    console.log('✅ Script do Replit removido do HTML');
  }
  
  console.log('✅ Build concluído com sucesso!');
  console.log(`📁 Arquivos gerados em: ${buildDir}`);
  
} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}