
import { TrainingResult } from '@/types';
import { motion } from 'framer-motion';

interface HistoryListProps {
  history: TrainingResult[];
  onItemClick?: (id: string) => void;
}

const HistoryList = ({ history, onItemClick }: HistoryListProps) => {
  if (history.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">Aucun entraînement dans l'historique</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getScoreClass = (note: number) => {
    if (note >= 16) return 'text-green-600';
    if (note >= 12) return 'text-blue-600';
    if (note >= 8) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-4">
      {history.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => onItemClick && onItemClick(item.id)}
          className={`p-4 bg-white border rounded-lg shadow-sm transition-all 
            ${onItemClick ? "cursor-pointer hover:border-app-blue-light hover:shadow" : ""}
          `}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {item.matiere === 'Tous les sujets' ? 'Examen' : 'Entraînement'}
                </span>
              </div>
              <h3 className="font-medium">{item.matiere}</h3>
              <div className="flex gap-2 text-sm text-gray-600">
                <span>{item.nombreQuestions} questions</span>
                {item.niveau && (
                  <span className="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 text-gray-800 capitalize">
                    {item.niveau}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-500">Score</div>
                <div className="font-semibold">
                  {item.score}/{item.nombreQuestions}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-500">Pourcentage</div>
                <div className="font-semibold">
                  {item.pourcentage.toFixed(1)}%
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-500">Note</div>
                <div className={`font-semibold ${getScoreClass(item.note)}`}>
                  {item.note.toFixed(1)}/20
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HistoryList;
