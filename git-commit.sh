#!/bin/bash

echo "Escolha o tipo de commit:"
echo "1) ✨ feat (nova funcionalidade)"
echo "2) 🐛 fix (correção de bug)"
echo "3) 📝 docs (documentação)"
echo "4) 💄 style (formatação/código sem mudança funcional)"
echo "5) ♻️ refactor (refatoração)"
echo "6) ⚡ perf (melhoria de performance)"
echo "7) ✅ test (testes)"
echo "8) 🔥 remove (remoção de código)"
echo "9) 🚀 deploy (deploy)"
echo "10) 🧹 chore (tarefas gerais)"
echo "11) 📦 build (build/dependências)"
echo "12) 👷 ci (integração contínua)"

read -p "Digite o número do tipo de commit: " tipo

case $tipo in
  1) emoji="✨ feat";;
  2) emoji="🐛 fix";;
  3) emoji="📝 docs";;
  4) emoji="💄 style";;
  5) emoji="♻️ refactor";;
  6) emoji="⚡ perf";;
  7) emoji="✅ test";;
  8) emoji="🔥 remove";;
  9) emoji="🚀 deploy";;
  10) emoji="🧹 chore";;
  11) emoji="📦 build";;
  12) emoji="👷 ci";;
  *) echo "Opção inválida!"; exit 1;;
esac

read -p "Digite a mensagem do commit: " mensagem

git add .
git commit -m "$emoji: $mensagem"
