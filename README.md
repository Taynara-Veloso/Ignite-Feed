![image description](/src/assets/printProjectReadme.jpg)


```js
    npm i date-fns - instalando biblioteca para utilizar datas.
```

## Spread Operator ( ...)

O operador de propagação JavaScript ( ...) nos permite copiar rapidamente todo ou parte de um array ou objeto existente para outro array ou objeto.
    

# Programação imperativa 

Dizemos à nossa máquina `o que deve ser feito (passo-a-passo)`.

## Receita de bolo

1. Ligar o forno a 180°; 
2. Pegar uma tijela;
3. Pegue os ingredientes;
4. Coloque cada ingrediente dentro da tijela e misture.
5. Unte uma forma com margarina
6. Coloque a massa do bolo dentro da forma untada.
7. Abra o forno.
8. Coloque a forma dentro do forno.
8. Feche o forno.

# Programação declarativa

Dizemos à nossa máquina `quais as condições para eu ter o resultado final`

## Receita de bolo

1. O forno precisa estar a 180°;
2. Depois que os ingredientes forem misturados, posso colocar em uma forma.
3. Quando o forno estiver quente, posso colocar a massa para assar;
4. Quando a massa estiver pronta, posso retira-la do forno.


# Key no React

## Por que única?
```js
//key={images.id}

const images = [
    {
        id: 1,
        img: './src/assets/img1.jpg',
    },
    {
        id: 2,
        img: './src/assets/img2.jpg',
    },
    {
        id: 3,
        img: './src/assets/img3.jpg',
    },
    {
        id: 4,
        img: './src/assets/img4.jpg',
    },
]
```

3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;

## imutabilidade

```
 As variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
```

---
### Das seguintes alternativas, qual é a maneira correta de se usar o map para iterar um array e exibir o valor do item em tela? Considere o array sendo um array de strings, como [’item1’, ‘item2’, ‘item3’].

    > array.map(item ⇒ <p>{item}</p>)

### Qual a forma correta de se adicionar um valor que existe na variável novoItem ao final de um array em um estado chamado items no React?

    > setItems(state ⇒ […state, novoItem])

### Sobre programação declarativa x programação imperativa, assinale a alternativa correta:

    > Programação declarativa é a forma em que, na maioria das vezes, vamos programar as aplicações React.

---
## A linguagem TypeScript adiciona tipagem estática ao JavaScript, que, originalmente, possui tipagem dinâmica

