export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      flashcards: {
        Row: {
          answer: string
          audio: string | null
          created_at: string | null
          created_by: string | null
          diplome: Database["public"]["Enums"]["diplome_type"] | null
          explication: string | null
          id: string
          matiere: string
          niveau: Database["public"]["Enums"]["niveau_type"]
          options: string[] | null
          question: string
          text: string | null
          type: Database["public"]["Enums"]["question_type"] | null
          updated_at: string | null
        }
        Insert: {
          answer: string
          audio?: string | null
          created_at?: string | null
          created_by?: string | null
          diplome?: Database["public"]["Enums"]["diplome_type"] | null
          explication?: string | null
          id?: string
          matiere: string
          niveau: Database["public"]["Enums"]["niveau_type"]
          options?: string[] | null
          question: string
          text?: string | null
          type?: Database["public"]["Enums"]["question_type"] | null
          updated_at?: string | null
        }
        Update: {
          answer?: string
          audio?: string | null
          created_at?: string | null
          created_by?: string | null
          diplome?: Database["public"]["Enums"]["diplome_type"] | null
          explication?: string | null
          id?: string
          matiere?: string
          niveau?: Database["public"]["Enums"]["niveau_type"]
          options?: string[] | null
          question?: string
          text?: string | null
          type?: Database["public"]["Enums"]["question_type"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          scheduled_for: string | null
          sent_at: string | null
          status: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          last_login?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          currency: string | null
          end_date: string | null
          id: string
          interval: string | null
          next_billing_date: string | null
          price: number | null
          start_date: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          end_date?: string | null
          id?: string
          interval?: string | null
          next_billing_date?: string | null
          price?: number | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          end_date?: string | null
          id?: string
          interval?: string | null
          next_billing_date?: string | null
          price?: number | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      texts: {
        Row: {
          content: string
          created_at: string | null
          diplome: Database["public"]["Enums"]["diplome_type"] | null
          id: string
          matiere: string | null
          niveau: Database["public"]["Enums"]["niveau_type"] | null
          titre: string
        }
        Insert: {
          content: string
          created_at?: string | null
          diplome?: Database["public"]["Enums"]["diplome_type"] | null
          id?: string
          matiere?: string | null
          niveau?: Database["public"]["Enums"]["niveau_type"] | null
          titre: string
        }
        Update: {
          content?: string
          created_at?: string | null
          diplome?: Database["public"]["Enums"]["diplome_type"] | null
          id?: string
          matiere?: string | null
          niveau?: Database["public"]["Enums"]["niveau_type"] | null
          titre?: string
        }
        Relationships: []
      }
      training_results: {
        Row: {
          created_at: string | null
          date: string | null
          diplome: Database["public"]["Enums"]["diplome_type"] | null
          id: string
          matiere: string
          niveau: Database["public"]["Enums"]["niveau_type"]
          nombre_questions: number
          note: number
          pourcentage: number
          questions: Json
          score: number
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          diplome?: Database["public"]["Enums"]["diplome_type"] | null
          id?: string
          matiere: string
          niveau: Database["public"]["Enums"]["niveau_type"]
          nombre_questions: number
          note: number
          pourcentage: number
          questions: Json
          score: number
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string | null
          diplome?: Database["public"]["Enums"]["diplome_type"] | null
          id?: string
          matiere?: string
          niveau?: Database["public"]["Enums"]["niveau_type"]
          nombre_questions?: number
          note?: number
          pourcentage?: number
          questions?: Json
          score?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "training_results_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activity: {
        Row: {
          activity_type: string | null
          details: Json | null
          id: string
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          activity_type?: string | null
          details?: Json | null
          id?: string
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          activity_type?: string | null
          details?: Json | null
          id?: string
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_activity_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notifications: {
        Row: {
          created_at: string | null
          id: string
          notification_id: string | null
          read: boolean | null
          read_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          notification_id?: string | null
          read?: boolean | null
          read_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          notification_id?: string | null
          read?: boolean | null
          read_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_notifications_notification_id_fkey"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "notifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          created_at: string | null
          id: string
          preferred_niveau: Database["public"]["Enums"]["niveau_type"] | null
          selected_specialities: string[] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          preferred_niveau?: Database["public"]["Enums"]["niveau_type"] | null
          selected_specialities?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          preferred_niveau?: Database["public"]["Enums"]["niveau_type"] | null
          selected_specialities?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      diplome_type:
        | "toeic"
        | "toefl"
        | "tage-mage"
        | "ielts"
        | "cambridge"
        | "gmat"
        | "brevet"
        | "baccalaureat"
      niveau_type:
        | "facile"
        | "intermediaire"
        | "avance"
        | "both"
        | "troisieme"
        | "quatrieme"
        | "premiere"
        | "terminale"
      question_type: "mcq" | "text" | "audio"
      user_role: "user" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
