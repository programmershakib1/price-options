import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const mathMarksData = [
        { id: 1, name: "Alice", scores: 78 },
        { id: 2, name: "Bob", scores: 44},
        { id: 3, name: "Charlie", scores: 55 },
        { id: 4, name: "Diana", scores: 88 },
        { id: 5, name: "Ethan", scores: 56 }
      ];

    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="scores"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;