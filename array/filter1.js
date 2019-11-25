const produtos = [
    {nome:'Notebook',preco:2499, fragil:true},
    {nome:'iPad pro',preco:4199, fragil:true},
    {nome:'Copo de vidro',preco:12.49, fragil:true},
    {nome:'copo de plástico',preco:18.99, fragil:false},
]

const getFrageis = item => item.fragil;
const getCaros = item => item.preco >= 500;

const retorno = produtos.filter(getFrageis).filter(getCaros)

console.log(retorno)
