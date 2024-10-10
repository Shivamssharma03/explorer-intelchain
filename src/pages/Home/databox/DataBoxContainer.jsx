import DataBox from "../../../components/DataBox";


const DataBoxContainer = () => {
  const dataItems = [
    { title: 'Gas Tracker', value: '< $0.01' },
    { title: 'Transaction Speed', value: 'Fast' },
    { title: 'Block Time', value: '2s' },
    { title: 'Validator Count', value: '1000+' },
    { title: 'Network Status', value: 'Active' },
  ];

  return (
    <div className="flex justify-between items-center space-x-4 p-6 bg-gray-100">
      {dataItems.map((item, index) => (
        <DataBox key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default DataBoxContainer;
