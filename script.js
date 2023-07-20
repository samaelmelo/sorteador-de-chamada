let listaDeChamadas = [
  'Sombreia',
  'Istrondou na barra',
  'Minguarana',
  'Caiano',
  'Chamada da união',
  'Hoasca',
  'Cajueiro',
  'Todo cipó',
  'Princesa Mariana',
  'Lago de Burracheira',
  'Amor de Mãe',
  'Nuvem clara e pura',
  'Estrela do norte',
  'Correr para onde tem sombra',
  '14 anjos divinos',
  'Grande foco',
  'Castelo da ciência',
  'Chamada das cores do uniforme',
  'Quando eu quero dou um nó',
  'Tiuaco',
  'Vitória',
  'Chamada do silêncio',
  'Rei rabino',
  'Expansão',
  'Guarnição divina',
  'Socorro divino',
  'Estrela do oriente',
];

const escolherUmaChamada = () => {
  let escolhaAleatoriaPeloIndex = Math.ceil(
    Math.random() * listaDeChamadas.length,
  );

  let chamadaEscolhida =
    listaDeChamadas[escolhaAleatoriaPeloIndex]?.toLowerCase();

  listaDeChamadas = listaDeChamadas.filter(
    chamada => chamada !== listaDeChamadas[escolhaAleatoriaPeloIndex],
  );

  return `
Treine a ${
    chamadaEscolhida.includes('chamada')
      ? chamadaEscolhida
      : `chamada ${chamadaEscolhida}`
  }`;
};

random.addEventListener('click', () => {
  chamadaSorteada.innerText = '... carregando';

  setTimeout(() => {
    chamadaSorteada.innerText = escolherUmaChamada();
  }, 1000);
});
