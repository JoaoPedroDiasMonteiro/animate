# Animate

Animate é uma biblioteca Jquery desenvolvida por [João Pedro Dias](https://github.com/JoaoPedroDiasMonteiro) que adiciona classes css em elementos quando eles estiverem visíveis na tela.

## Instalação

Use o gerenciador de pacotes [node](https://nodejs.org) para instalar o Animate.

```bash
npm install joaopedrodias-animate
```

## Como usar

```html
<div class="animate" data-action="minha-animacao minha-animacao-2" data-delay="200">
content
</div>
```
```javascript
$(document).ready(function(){
  
$('.animate').animateOnScroll({
        /* Opções */
    });

})
```

## Opções

### Loop
boolean -> Faz a animação ficar em loop.


## Contributing
Pull requests são bem vindos.

## License
[MIT](https://choosealicense.com/licenses/mit/)
