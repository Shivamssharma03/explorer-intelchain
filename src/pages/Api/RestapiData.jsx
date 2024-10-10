
const SchemaData = [
    {
      title: "Block",
      content: [],
    },
    {
      title: "TokenTransfer",
      content: [
        {
          label: "block_hash",
          value: "0x123456...",
          subContent: [
            { label: "address", value: "0xabc123..." },
            { label: "type", value: "Ethereum" },
          ],
        },
        {
          label: "from",
          value: "AddressParam",
          subContent: [
            { label: "address", value: "0xabc123..." },
            { label: "type", value: "Ethereum" },
          ],
        },
        {
          label: "to",
          value: "AddressParam",
          subContent: [
            { label: "address", value: "0xdef456..." },
            { label: "type", value: "Ethereum" },
          ],
        },
        {
          label: "token",
          value: "TokenInfo",
          subContent: [
            { label: "name", value: "USDT" },
            { label: "symbol", value: "Tether" },
          ],
        },
        {
          label: "total",
          value: "1000",
          subContent: [
            { label: "name", value: "USDT" },
            { label: "symbol", value: "Tether" },
          ]
        },
        {
          label: "tx_hash",
          value: "0x789abc...",
          subContent: [
            { label: "name", value: "USDT" },
            { label: "symbol", value: "Tether" },
          ],
        },
        {
          label: "type",
          value: "transfer",
          subContent: [
            { label: "name", value: "USDT" },
            { label: "symbol", value: "Tether" },
          ],
        },
      ],
    },
    {
      title: "RawTrace",
      content: [],
    },
    {
      title: "RawTraceCallAction",
      content: [],
    },
    {
      title: "RawTraceCreateAction",
      content: [],
    },
    {
      title: "RawTraceSelfDestructAction",
      content: [],
    },
  ];



  const RoutesData = [
    { title: 'GET ', description: 'Search', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Search redirect', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get txs', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get blocks', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Search', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Search redirect', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get txs', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get blocks', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Search', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Search redirect', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get txs', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get blocks', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Search', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Search redirect', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get txs', routes: "search/", text: "search" },
    { title: 'GET ', description: 'Get blocks', routes: "search/", text: "search" },
  ];

  

export {SchemaData,RoutesData}