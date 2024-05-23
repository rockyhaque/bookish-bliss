import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getReadBooks } from '../../utilities/utilities';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const [readBooksData, setReadBooksData] = useState([]);

  useEffect(() => {
    const readBooks = getReadBooks();
    const formattedData = readBooks.map(book => ({
      name: book.name,
      totalPages: book.totalPages,
    }));
    setReadBooksData(formattedData);
  }, []);

  return (
    <div>

      {readBooksData.length > 0 ? (
        <BarChart
          width={1000}
          height={600}
          data={readBooksData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {readBooksData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      ) : (
        <p className="text-center text-xl font-semibold mt-12">Please add on your Read List to show the chart</p>
      )}
    </div>
  );
};

export default PagesToRead;
