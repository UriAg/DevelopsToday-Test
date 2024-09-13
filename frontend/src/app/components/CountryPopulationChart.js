import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name: "María", age: 10, weight: 60},
    {name: 'Karina', age: 25, weight: 70},
    {name: 'Susana', age: 15, weight: 65},
    {name: 'Pedro', age: 35, weight: 85},
    {name: 'Felipe', age: 12, weight: 48},
    {name: 'Laura', age: 30, weight: 69},
    {name: 'Adrián', age: 15, weight: 78},
]


const CustomYAxis = ({ tickCount = 5, ...props }) => {
  return <YAxis tickCount={tickCount} {...props} />;
};

const CountryPopulationChart = ({ populationData }) => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
    <AreaChart
      width={500}
      height={400}
      data={populationData}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <CustomYAxis />
      <XAxis dataKey="year"/>
      <Tooltip />
      <Area type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
  )
}

export default CountryPopulationChart