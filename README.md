# 🔗 - URLShortener
URLShortener é um website simples e responsivo feito com `TypeScript`, `JavaScript`, `node.js`, `express`, `HTML` e `CSS` com o objetivo de funcionar como um encurtador de links e IP Logger.

## 🤔 - Como usar?

```py
git clone https://github.com/josejooj/URLShortener
cd URLShortener
npm install
npm start
```

Após fazer isso em uma VPS ou na sua máquina local o site já pode ser acessado em `http://<seu-ip>:80`, e no caso de VPS com conexões abertas, pode ser acessada por todo mundo.

## 🤖 - Como funciona?
### Página principal `/`

![Página principal](https://user-images.githubusercontent.com/76636096/206935497-4fd3e4b8-cf46-447f-ba4f-b1f0b4ec8b2d.png)
> Essa é a página principal, onde tudo começa. Explicando a página:

* `URLShortener` - Logo no topo da página que redireciona o usuário para a página home ao ser clicado
* `Github icon` - Ao clicar, o usuário é redirecionado para este repositório
* `URL Longa` - É o link em que o usuário deve ser redirecionado pelo URLShortener
* `Rota customizada` - Uma rota customizada, é opcional (Ex: `http://<seu-ip>:80/[Rota customizada]`)
* `Gerar URL Curta` - Botão que gera a URL no sistema interno do URLShortener e redireciona o usuário para um painel

### Painel `/view/<viewURL>`

![image](https://user-images.githubusercontent.com/76636096/206941273-65acf3a3-98ca-40e0-b260-d076a43828b1.png)
> Essa é a página que o usuário é redirecionado quando aperta em `Gerar URL Curta` na página principal. Explicando a página:

* `Informações` - Todas as informações referentes à aquela URL
    * `Gerado em` - Data em que foi gerado o link
    * `Custom URL` - URL Customizada, a qual você deve enviar para sua vítima
    * `URL to redirect` - É o link que o URLShortener vai redirecionar o usuário após concluir toda a task de IP Logger
    * `View URL` - É a página que você está agora, página para onde vai os resultados do IP Logger
* `Acessos` - São todos os acessos que sua página teve (inclui crawlers)
    * `IP` - O endereço IP que requisitou a sua URL
    * `Em` - Data e hora da requisição
    * `País` - País de onde veio a requisição, segundo o IP
    * `Estado` - Estado de onde veio a requisição, segundo o IP
    * `Cidade` - Cidade de onde veio a requisição, segundo o IP
    * `Serviço` - O provedor de internet do usuário
    * `User-Agent` - Informações do dispositivo que foi usado para fazer a requisição
    * `Mapa` - Se as coordenadas do servidor do provedor estiverem disponíveis, é exibido a localização no mapa

# Como testar?
Eu criei um projeto no `repl.it` para que o site possa ser testado publicamente, basta acessar o website https://replit.com/@cleiton2040/URLShortener?v=1
