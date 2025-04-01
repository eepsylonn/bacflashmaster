
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { BacSpecialite } from '@/types';

interface UserPreferencesContextType {
  selectedSpecialities: BacSpecialite[];
  setSelectedSpecialities: (specialities: BacSpecialite[]) => void;
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSpecialities, setSelectedSpecialities] = useState<BacSpecialite[]>(() => {
    const saved = localStorage.getItem('selectedSpecialities');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedSpecialities', JSON.stringify(selectedSpecialities));
  }, [selectedSpecialities]);

  return (
    <UserPreferencesContext.Provider
      value={{
        selectedSpecialities,
        setSelectedSpecialities,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};
