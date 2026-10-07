# ALLAN / ANALYTICS

Painel demonstrativo de Instagram criado para **@47contadoallan**, com visual escuro, laranja de alto contraste, navegação lateral e análises de conta e conteúdo. Inspirado na estrutura de https://rogeriotpires-spec.github.io/instagram-dashboard/index.html.

**Todos os números, publicações, snapshots e distribuições de público são fictícios. Não há conexão com o Instagram.**

## Versão pública

GitHub Pages: https://allansantosbr.github.io/allan-instagram-analytics/

O repositório público contém somente os arquivos estáticos do exemplo. Não contém credenciais, dados privados ou arquivos de configuração da hospedagem privada.

## O que o painel oferece

- 12 áreas: Visão geral, Diário, Conversão, Vida do post, Conteúdo, Reels, Temas, Público, Análise, Benchmark, Posts e Origem e cobertura.
- Oito indicadores principais e comparação com o período anterior.
- Filtros de 7, 30, 60, 90 e 180 dias sobre 360 dias simulados e 384 publicações.
- Curvas diárias, média móvel de 7 dias e período anterior alinhado por posição.
- Crescimento com base inicial, ganhos, perdas, saldo e base final.
- Formatos e temas comparados na mesma idade; mediana, Q1–Q3 e tamanho de amostra.
- Mapa de dia e horário, dispersão de retenção de Reels e detalhes clicáveis.
- Eficiência por mil contas alcançadas, cobertura de atribuição e campos ausentes.
- Busca, formato, tema, ordenação, paginação, exportação CSV e estrutura JSON.

## Executar localmente

No projeto completo, abra `dist/index.html` ou execute:

```sh
python3 -m http.server 8767 --directory dist
```

No repositório público, os arquivos ficam na raiz; abra `index.html` ou execute `python3 -m http.server 8767`.

Não há compilação nem dependências de execução. Google Fonts usa alternativas locais se o acesso às fontes falhar.

## Arquivos

`index.html` define a estrutura; `styles.css` define o visual e a adaptação ao celular; `data.js` gera o exemplo determinístico; `app.js` calcula análises e controla a interface. No projeto local esses arquivos estão em `dist`.

## Interpretação dos indicadores

Métricas da conta incluem todos os formatos e não mudam com o filtro de formato das publicações. Alcance médio diário não é alcance único do período. Views dos posts são acumuladas até a referência e diferem das views recebidas pela conta no período.

Taxa de interação: mediana diária de contas com interação / alcance. Crescimento: saldo / base inicial. Eficiência: eventos ou seguidores atribuídos / alcance do post × 1.000. Atribuição e visitas são campos distintos, não um percurso individual comprovado. Snapshots só existem depois que o post atinge cada idade. “—” indica dado ausente, não zero.

Público é um retrato fictício fixo; benchmark externo permanece sem fonte. As análises são exemplos, não recomendações baseadas no desempenho real da conta.

## Dados reais

A exportação JSON documenta a estrutura. Uma integração real exige autorização, validação das métricas disponíveis, tratamento de lacunas e fonte rastreável. Credenciais devem ficar no servidor. Não coloque tokens no navegador nem no repositório público.

A interface atual foi verificada com a série demonstrativa contínua. Uma importação real precisa de validação adicional; não basta substituir números e apagar o aviso de demonstração.
