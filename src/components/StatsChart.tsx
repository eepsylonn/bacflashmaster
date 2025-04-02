
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChartData {
  date: string;
  note: number;
  matiere: string;
  niveau: string;
}

interface StatsChartProps {
  data: ChartData[];
  matieres: string[];
  selectedMatiere: string | 'all';
  onMatiereChange: (matiere: string | 'all') => void;
}

const StatsChart = ({ 
  data, 
  matieres, 
  selectedMatiere, 
  onMatiereChange 
}: StatsChartProps) => {
  const [chartHeight, setChartHeight] = useState(300);
  const isMobile = useIsMobile();

  // Adjust chart height and format based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight(200);
      } else if (window.innerWidth < 768) {
        setChartHeight(250);
      } else {
        setChartHeight(300);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card className={`${isMobile ? 'p-3' : 'p-4 md:p-6'}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-3 md:gap-4">
        <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold`}>Évolution de tes notes</h2>
        
        <Select 
          value={selectedMatiere} 
          onValueChange={(value) => onMatiereChange(value)}
        >
          <SelectTrigger className={`${isMobile ? 'w-full' : 'w-[200px]'}`}>
            <SelectValue placeholder="Toutes les matières" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les matières</SelectItem>
            {matieres.map(matiere => (
              <SelectItem key={matiere} value={matiere}>
                {matiere}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={chartHeight}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: isMobile ? 10 : 30,
              left: isMobile ? 5 : 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: isMobile ? 10 : 12 }} 
              tickFormatter={isMobile ? (value) => value.split('/').slice(0, 2).join('/') : undefined}
            />
            <YAxis 
              domain={[0, 20]} 
              tick={{ fontSize: isMobile ? 10 : 12 }}
            />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: isMobile ? 10 : 12 }} />
            <Line
              type="monotone"
              dataKey="note"
              stroke="#3B82F6"
              activeDot={{ r: isMobile ? 6 : 8 }}
              name="Note /20"
              strokeWidth={isMobile ? 1.5 : 2}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className={`${isMobile ? 'h-[150px]' : 'h-[200px]'} flex items-center justify-center text-gray-500 text-sm md:text-base`}>
          Pas assez de données pour afficher le graphique
        </div>
      )}
    </Card>
  );
};

export default StatsChart;
