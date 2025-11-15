## **Visão Geral**

Este é um aplicativo Next.js com Firebase integrado. O aplicativo possui um sistema de autenticação com login e logout, e uma página de dashboard protegida que só pode ser acessada por usuários autenticados.

## **Design e Estilo**

- **Paleta de Cores:** Fundo escuro (`bg-gray-900`) com elementos em cinza mais claro (`bg-gray-800`) e texto branco.
- **Tipografia:** Fonte padrão do sistema.
- **Componentes:**
    - **Botões:** Cantos arredondados, preenchimento e efeito de foco.
    - **Inputs:** Estilo similar aos botões, com fundo claro e texto escuro.

## **Funcionalidades**

- **Autenticação de Usuário:**
    - Login com email e senha.
    - Logout.
- **Página de Login:** Formulário para inserir email e senha.
- **Página de Dashboard:** Página protegida que exibe a mensagem "Usuário autenticado" e um botão de logout.
- **Middleware:** Protege a rota `/dashboard`, redirecionando usuários não autenticados para a página de login.
- **Regras do Firestore:** Permite leitura e escrita apenas para usuários autenticados.

## **Plano de Alterações**

- **Fase 1 (Concluída):** Configuração inicial do projeto Next.js com páginas de login e dashboard.
- **Fase 2 (Atual):** Implementação da autenticação com Firebase, incluindo:
    - Configuração do Firebase Client SDK.
    - Criação de Server Actions para login e logout.
    - Implementação de middleware para proteger a rota `/dashboard`.
    - Definição das regras de segurança do Firestore.
