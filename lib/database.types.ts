export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      biographies: {
        Row: {
          bio: string | null
          birth_country_id: number | null
          birthplace: string | null
          created_at: string
          created_by: string | null
          date_of_birth: string | null
          date_of_death: string | null
          display_name: string | null
          full_name: string
          id: number
          nationality_id: number | null
          photo_credit: string | null
          photo_license: string | null
          photo_source_url: string | null
          photo_url: string | null
          slug: string
          sort_name: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          bio?: string | null
          birth_country_id?: number | null
          birthplace?: string | null
          created_at?: string
          created_by?: string | null
          date_of_birth?: string | null
          date_of_death?: string | null
          display_name?: string | null
          full_name: string
          id?: never
          nationality_id?: number | null
          photo_credit?: string | null
          photo_license?: string | null
          photo_source_url?: string | null
          photo_url?: string | null
          slug: string
          sort_name?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          bio?: string | null
          birth_country_id?: number | null
          birthplace?: string | null
          created_at?: string
          created_by?: string | null
          date_of_birth?: string | null
          date_of_death?: string | null
          display_name?: string | null
          full_name?: string
          id?: never
          nationality_id?: number | null
          photo_credit?: string | null
          photo_license?: string | null
          photo_source_url?: string | null
          photo_url?: string | null
          slug?: string
          sort_name?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "biographies_birth_country_id_fkey"
            columns: ["birth_country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "biographies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "biographies_nationality_id_fkey"
            columns: ["nationality_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "biographies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      biography_sources: {
        Row: {
          biography_id: number
          note: string | null
          source_id: number
        }
        Insert: {
          biography_id: number
          note?: string | null
          source_id: number
        }
        Update: {
          biography_id?: number
          note?: string | null
          source_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "biography_sources_biography_id_fkey"
            columns: ["biography_id"]
            isOneToOne: false
            referencedRelation: "biographies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "biography_sources_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "sources"
            referencedColumns: ["id"]
          },
        ]
      }
      club_sources: {
        Row: {
          club_id: number
          note: string | null
          source_id: number
        }
        Insert: {
          club_id: number
          note?: string | null
          source_id: number
        }
        Update: {
          club_id?: number
          note?: string | null
          source_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "club_sources_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_sources_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "sources"
            referencedColumns: ["id"]
          },
        ]
      }
      clubs: {
        Row: {
          city: string | null
          country_id: number | null
          created_at: string
          created_by: string | null
          description: string | null
          ended_year: number | null
          federation_id: number | null
          founded_year: number | null
          id: number
          logo_credit: string | null
          logo_license: string | null
          logo_source_url: string | null
          logo_url: string | null
          name: string
          short_name: string | null
          slug: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          city?: string | null
          country_id?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          ended_year?: number | null
          federation_id?: number | null
          founded_year?: number | null
          id?: never
          logo_credit?: string | null
          logo_license?: string | null
          logo_source_url?: string | null
          logo_url?: string | null
          name: string
          short_name?: string | null
          slug: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          city?: string | null
          country_id?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          ended_year?: number | null
          federation_id?: number | null
          founded_year?: number | null
          id?: never
          logo_credit?: string | null
          logo_license?: string | null
          logo_source_url?: string | null
          logo_url?: string | null
          name?: string
          short_name?: string | null
          slug?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clubs_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clubs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clubs_federation_id_fkey"
            columns: ["federation_id"]
            isOneToOne: false
            referencedRelation: "federations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clubs_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      coach_attributes: {
        Row: {
          adaptability: number | null
          big_match_management: number | null
          charisma: number | null
          coach_id: number
          coaching_attacking: number | null
          coaching_defending: number | null
          coaching_fitness: number | null
          coaching_goalkeeper_distribution: number | null
          coaching_goalkeeper_handling: number | null
          coaching_goalkeeper_shot_stopping: number | null
          coaching_mental: number | null
          coaching_set_pieces: number | null
          coaching_tactical: number | null
          coaching_technical: number | null
          coaching_working_with_youngsters: number | null
          crisis_management: number | null
          determination: number | null
          level_of_discipline: number | null
          media_openness: number | null
          media_skill: number | null
          motivating: number | null
          people_management: number | null
          player_knowledge: number | null
          recruitment: number | null
          tactical_flexibility: number | null
          tactical_innovation: number | null
          youngster_knowledge: number | null
        }
        Insert: {
          adaptability?: number | null
          big_match_management?: number | null
          charisma?: number | null
          coach_id: number
          coaching_attacking?: number | null
          coaching_defending?: number | null
          coaching_fitness?: number | null
          coaching_goalkeeper_distribution?: number | null
          coaching_goalkeeper_handling?: number | null
          coaching_goalkeeper_shot_stopping?: number | null
          coaching_mental?: number | null
          coaching_set_pieces?: number | null
          coaching_tactical?: number | null
          coaching_technical?: number | null
          coaching_working_with_youngsters?: number | null
          crisis_management?: number | null
          determination?: number | null
          level_of_discipline?: number | null
          media_openness?: number | null
          media_skill?: number | null
          motivating?: number | null
          people_management?: number | null
          player_knowledge?: number | null
          recruitment?: number | null
          tactical_flexibility?: number | null
          tactical_innovation?: number | null
          youngster_knowledge?: number | null
        }
        Update: {
          adaptability?: number | null
          big_match_management?: number | null
          charisma?: number | null
          coach_id?: number
          coaching_attacking?: number | null
          coaching_defending?: number | null
          coaching_fitness?: number | null
          coaching_goalkeeper_distribution?: number | null
          coaching_goalkeeper_handling?: number | null
          coaching_goalkeeper_shot_stopping?: number | null
          coaching_mental?: number | null
          coaching_set_pieces?: number | null
          coaching_tactical?: number | null
          coaching_technical?: number | null
          coaching_working_with_youngsters?: number | null
          crisis_management?: number | null
          determination?: number | null
          level_of_discipline?: number | null
          media_openness?: number | null
          media_skill?: number | null
          motivating?: number | null
          people_management?: number | null
          player_knowledge?: number | null
          recruitment?: number | null
          tactical_flexibility?: number | null
          tactical_innovation?: number | null
          youngster_knowledge?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "coach_attributes_coach_id_fkey"
            columns: ["coach_id"]
            isOneToOne: true
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
        ]
      }
      coach_club_stints: {
        Row: {
          club_id: number
          coach_id: number
          draws: number | null
          end_year: number | null
          id: number
          is_caretaker: boolean
          losses: number | null
          matches: number | null
          start_year: number
          wins: number | null
        }
        Insert: {
          club_id: number
          coach_id: number
          draws?: number | null
          end_year?: number | null
          id?: never
          is_caretaker?: boolean
          losses?: number | null
          matches?: number | null
          start_year: number
          wins?: number | null
        }
        Update: {
          club_id?: number
          coach_id?: number
          draws?: number | null
          end_year?: number | null
          id?: never
          is_caretaker?: boolean
          losses?: number | null
          matches?: number | null
          start_year?: number
          wins?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "coach_club_stints_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coach_club_stints_coach_id_fkey"
            columns: ["coach_id"]
            isOneToOne: false
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
        ]
      }
      coach_hidden_attributes: {
        Row: {
          ambition: number | null
          coach_id: number
          controversy: number | null
          ego: number | null
          financial_motivation: number | null
          home_reputation: number | null
          loyalty: number | null
          patriotism: number | null
          pressure: number | null
          professionalism: number | null
          resilience: number | null
          sportsmanship: number | null
          temperament: number | null
          world_reputation: number | null
          youth_trust: number | null
        }
        Insert: {
          ambition?: number | null
          coach_id: number
          controversy?: number | null
          ego?: number | null
          financial_motivation?: number | null
          home_reputation?: number | null
          loyalty?: number | null
          patriotism?: number | null
          pressure?: number | null
          professionalism?: number | null
          resilience?: number | null
          sportsmanship?: number | null
          temperament?: number | null
          world_reputation?: number | null
          youth_trust?: number | null
        }
        Update: {
          ambition?: number | null
          coach_id?: number
          controversy?: number | null
          ego?: number | null
          financial_motivation?: number | null
          home_reputation?: number | null
          loyalty?: number | null
          patriotism?: number | null
          pressure?: number | null
          professionalism?: number | null
          resilience?: number | null
          sportsmanship?: number | null
          temperament?: number | null
          world_reputation?: number | null
          youth_trust?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "coach_hidden_attributes_coach_id_fkey"
            columns: ["coach_id"]
            isOneToOne: true
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
        ]
      }
      coach_national_stints: {
        Row: {
          coach_id: number
          draws: number | null
          end_year: number | null
          id: number
          is_caretaker: boolean
          losses: number | null
          matches: number | null
          national_team_id: number
          start_year: number
          wins: number | null
        }
        Insert: {
          coach_id: number
          draws?: number | null
          end_year?: number | null
          id?: never
          is_caretaker?: boolean
          losses?: number | null
          matches?: number | null
          national_team_id: number
          start_year: number
          wins?: number | null
        }
        Update: {
          coach_id?: number
          draws?: number | null
          end_year?: number | null
          id?: never
          is_caretaker?: boolean
          losses?: number | null
          matches?: number | null
          national_team_id?: number
          start_year?: number
          wins?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "coach_national_stints_coach_id_fkey"
            columns: ["coach_id"]
            isOneToOne: false
            referencedRelation: "coaches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coach_national_stints_national_team_id_fkey"
            columns: ["national_team_id"]
            isOneToOne: false
            referencedRelation: "national_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      coaches: {
        Row: {
          biography_id: number
          career_start_year: number | null
          created_at: string
          created_by: string | null
          id: number
          is_published: boolean
          legacy_summary: string | null
          retired_year: number | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          biography_id: number
          career_start_year?: number | null
          created_at?: string
          created_by?: string | null
          id?: never
          is_published?: boolean
          legacy_summary?: string | null
          retired_year?: number | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          biography_id?: number
          career_start_year?: number | null
          created_at?: string
          created_by?: string | null
          id?: never
          is_published?: boolean
          legacy_summary?: string | null
          retired_year?: number | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "coaches_biography_id_fkey"
            columns: ["biography_id"]
            isOneToOne: true
            referencedRelation: "biographies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coaches_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coaches_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          created_at: string
          demonym: string | null
          end_year: number | null
          flag_url: string | null
          id: number
          is_historical: boolean
          iso_code: string | null
          name: string
          slug: string
          start_year: number | null
        }
        Insert: {
          created_at?: string
          demonym?: string | null
          end_year?: number | null
          flag_url?: string | null
          id?: never
          is_historical?: boolean
          iso_code?: string | null
          name: string
          slug: string
          start_year?: number | null
        }
        Update: {
          created_at?: string
          demonym?: string | null
          end_year?: number | null
          flag_url?: string | null
          id?: never
          is_historical?: boolean
          iso_code?: string | null
          name?: string
          slug?: string
          start_year?: number | null
        }
        Relationships: []
      }
      federations: {
        Row: {
          confederation: string | null
          country_id: number | null
          created_at: string
          created_by: string | null
          description: string | null
          ended_year: number | null
          founded_year: number | null
          id: number
          logo_credit: string | null
          logo_license: string | null
          logo_source_url: string | null
          logo_url: string | null
          name: string
          short_name: string | null
          slug: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          confederation?: string | null
          country_id?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          ended_year?: number | null
          founded_year?: number | null
          id?: never
          logo_credit?: string | null
          logo_license?: string | null
          logo_source_url?: string | null
          logo_url?: string | null
          name: string
          short_name?: string | null
          slug: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          confederation?: string | null
          country_id?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          ended_year?: number | null
          founded_year?: number | null
          id?: never
          logo_credit?: string | null
          logo_license?: string | null
          logo_source_url?: string | null
          logo_url?: string | null
          name?: string
          short_name?: string | null
          slug?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "federations_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      national_teams: {
        Row: {
          country_id: number
          created_at: string
          created_by: string | null
          crest_url: string | null
          description: string | null
          federation_id: number | null
          id: number
          name: string
          slug: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          country_id: number
          created_at?: string
          created_by?: string | null
          crest_url?: string | null
          description?: string | null
          federation_id?: number | null
          id?: never
          name: string
          slug: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          country_id?: number
          created_at?: string
          created_by?: string | null
          crest_url?: string | null
          description?: string | null
          federation_id?: number | null
          id?: never
          name?: string
          slug?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "national_teams_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "national_teams_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "national_teams_federation_fk"
            columns: ["federation_id", "country_id"]
            isOneToOne: false
            referencedRelation: "federations"
            referencedColumns: ["id", "country_id"]
          },
          {
            foreignKeyName: "national_teams_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      player_attributes: {
        Row: {
          acceleration: number
          acrobat: number
          aerial_reach: number
          aggression: number
          agility: number
          anticipation: number
          balance: number
          bravery: number
          command_of_area: number
          communication: number
          composure: number
          concentration: number
          corners: number
          crossing: number
          decisions: number
          determination: number
          dribbling: number
          eccentricity: number
          finishing: number
          first_touch: number
          flair: number
          free_kick_taking: number
          handling: number
          heading: number
          jumping_reach: number
          kicking: number
          leadership: number
          long_shots: number
          long_throws: number
          marking: number
          natural_fitness: number
          off_the_ball: number
          one_on_ones: number
          pace: number
          passing: number
          penalty_stopping: number
          penalty_taking: number
          player_id: number
          positioning: number
          punching: number
          reflexes: number
          rushing_out: number
          stamina: number
          strength: number
          tackling: number
          teamwork: number
          technique: number
          throwing: number
          vision: number
          work_rate: number
        }
        Insert: {
          acceleration: number
          acrobat: number
          aerial_reach?: number
          aggression: number
          agility: number
          anticipation: number
          balance: number
          bravery: number
          command_of_area?: number
          communication?: number
          composure: number
          concentration: number
          corners: number
          crossing: number
          decisions: number
          determination: number
          dribbling: number
          eccentricity?: number
          finishing: number
          first_touch: number
          flair: number
          free_kick_taking: number
          handling?: number
          heading: number
          jumping_reach: number
          kicking?: number
          leadership: number
          long_shots: number
          long_throws: number
          marking: number
          natural_fitness: number
          off_the_ball: number
          one_on_ones?: number
          pace: number
          passing: number
          penalty_stopping?: number
          penalty_taking: number
          player_id: number
          positioning: number
          punching?: number
          reflexes?: number
          rushing_out?: number
          stamina: number
          strength: number
          tackling: number
          teamwork: number
          technique: number
          throwing?: number
          vision: number
          work_rate: number
        }
        Update: {
          acceleration?: number
          acrobat?: number
          aerial_reach?: number
          aggression?: number
          agility?: number
          anticipation?: number
          balance?: number
          bravery?: number
          command_of_area?: number
          communication?: number
          composure?: number
          concentration?: number
          corners?: number
          crossing?: number
          decisions?: number
          determination?: number
          dribbling?: number
          eccentricity?: number
          finishing?: number
          first_touch?: number
          flair?: number
          free_kick_taking?: number
          handling?: number
          heading?: number
          jumping_reach?: number
          kicking?: number
          leadership?: number
          long_shots?: number
          long_throws?: number
          marking?: number
          natural_fitness?: number
          off_the_ball?: number
          one_on_ones?: number
          pace?: number
          passing?: number
          penalty_stopping?: number
          penalty_taking?: number
          player_id?: number
          positioning?: number
          punching?: number
          reflexes?: number
          rushing_out?: number
          stamina?: number
          strength?: number
          tackling?: number
          teamwork?: number
          technique?: number
          throwing?: number
          vision?: number
          work_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "player_attributes_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "player_feet"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_attributes_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      player_club_stints: {
        Row: {
          appearances: number | null
          club_id: number
          end_year: number | null
          goals: number | null
          id: number
          is_loan: boolean
          player_id: number
          start_year: number
        }
        Insert: {
          appearances?: number | null
          club_id: number
          end_year?: number | null
          goals?: number | null
          id?: never
          is_loan?: boolean
          player_id: number
          start_year: number
        }
        Update: {
          appearances?: number | null
          club_id?: number
          end_year?: number | null
          goals?: number | null
          id?: never
          is_loan?: boolean
          player_id?: number
          start_year?: number
        }
        Relationships: [
          {
            foreignKeyName: "player_club_stints_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_club_stints_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_feet"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_club_stints_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      player_hidden_attributes: {
        Row: {
          adaptability: number | null
          ambition: number | null
          charisma: number | null
          consistency: number | null
          controversy: number | null
          current_ability: number | null
          dirtiness: number | null
          ego: number | null
          financial_motivation: number | null
          important_matches: number | null
          injury_proneness: number | null
          loyalty: number | null
          media_openness: number | null
          media_skill: number | null
          mentoring: number | null
          patriotism: number | null
          player_id: number
          pressure: number | null
          professionalism: number | null
          resilience: number | null
          sportsmanship: number | null
          temperament: number | null
          versatility: number | null
        }
        Insert: {
          adaptability?: number | null
          ambition?: number | null
          charisma?: number | null
          consistency?: number | null
          controversy?: number | null
          current_ability?: number | null
          dirtiness?: number | null
          ego?: number | null
          financial_motivation?: number | null
          important_matches?: number | null
          injury_proneness?: number | null
          loyalty?: number | null
          media_openness?: number | null
          media_skill?: number | null
          mentoring?: number | null
          patriotism?: number | null
          player_id: number
          pressure?: number | null
          professionalism?: number | null
          resilience?: number | null
          sportsmanship?: number | null
          temperament?: number | null
          versatility?: number | null
        }
        Update: {
          adaptability?: number | null
          ambition?: number | null
          charisma?: number | null
          consistency?: number | null
          controversy?: number | null
          current_ability?: number | null
          dirtiness?: number | null
          ego?: number | null
          financial_motivation?: number | null
          important_matches?: number | null
          injury_proneness?: number | null
          loyalty?: number | null
          media_openness?: number | null
          media_skill?: number | null
          mentoring?: number | null
          patriotism?: number | null
          player_id?: number
          pressure?: number | null
          professionalism?: number | null
          resilience?: number | null
          sportsmanship?: number | null
          temperament?: number | null
          versatility?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "player_hidden_attributes_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "player_feet"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_hidden_attributes_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      player_national_stints: {
        Row: {
          caps: number | null
          debut_date: string | null
          goals: number | null
          id: number
          last_cap_date: string | null
          national_team_id: number
          player_id: number
        }
        Insert: {
          caps?: number | null
          debut_date?: string | null
          goals?: number | null
          id?: never
          last_cap_date?: string | null
          national_team_id: number
          player_id: number
        }
        Update: {
          caps?: number | null
          debut_date?: string | null
          goals?: number | null
          id?: never
          last_cap_date?: string | null
          national_team_id?: number
          player_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "player_national_stints_national_team_id_fkey"
            columns: ["national_team_id"]
            isOneToOne: false
            referencedRelation: "national_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_national_stints_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_feet"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_national_stints_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      player_positions: {
        Row: {
          is_primary: boolean
          player_id: number
          position: Database["public"]["Enums"]["position_code"]
          rating: number
        }
        Insert: {
          is_primary?: boolean
          player_id: number
          position: Database["public"]["Enums"]["position_code"]
          rating: number
        }
        Update: {
          is_primary?: boolean
          player_id?: number
          position?: Database["public"]["Enums"]["position_code"]
          rating?: number
        }
        Relationships: [
          {
            foreignKeyName: "player_positions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_feet"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_positions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      players: {
        Row: {
          biography_id: number
          career_start_year: number | null
          created_at: string
          created_by: string | null
          height_cm: number | null
          id: number
          is_published: boolean
          left_foot_level: number | null
          legacy_summary: string | null
          retired_year: number | null
          right_foot_level: number | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          biography_id: number
          career_start_year?: number | null
          created_at?: string
          created_by?: string | null
          height_cm?: number | null
          id?: never
          is_published?: boolean
          left_foot_level?: number | null
          legacy_summary?: string | null
          retired_year?: number | null
          right_foot_level?: number | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          biography_id?: number
          career_start_year?: number | null
          created_at?: string
          created_by?: string | null
          height_cm?: number | null
          id?: never
          is_published?: boolean
          left_foot_level?: number | null
          legacy_summary?: string | null
          retired_year?: number | null
          right_foot_level?: number | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "players_biography_id_fkey"
            columns: ["biography_id"]
            isOneToOne: true
            referencedRelation: "biographies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          created_at?: string
          display_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      sources: {
        Row: {
          accessed_on: string | null
          author: string | null
          created_at: string
          id: number
          notes: string | null
          published_on: string | null
          publisher: string | null
          title: string
          url: string | null
        }
        Insert: {
          accessed_on?: string | null
          author?: string | null
          created_at?: string
          id?: never
          notes?: string | null
          published_on?: string | null
          publisher?: string | null
          title: string
          url?: string | null
        }
        Update: {
          accessed_on?: string | null
          author?: string | null
          created_at?: string
          id?: never
          notes?: string | null
          published_on?: string | null
          publisher?: string | null
          title?: string
          url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      player_feet: {
        Row: {
          foot_summary: string | null
          left_foot_label: string | null
          left_foot_level: number | null
          player_id: number | null
          preferred_foot: Database["public"]["Enums"]["preferred_foot"] | null
          right_foot_label: string | null
          right_foot_level: number | null
          strong_foot_level: number | null
          weak_foot_label: string | null
          weak_foot_level: number | null
        }
        Insert: {
          foot_summary?: never
          left_foot_label?: never
          left_foot_level?: number | null
          player_id?: number | null
          preferred_foot?: never
          right_foot_label?: never
          right_foot_level?: number | null
          strong_foot_level?: never
          weak_foot_label?: never
          weak_foot_level?: never
        }
        Update: {
          foot_summary?: never
          left_foot_label?: never
          left_foot_level?: number | null
          player_id?: number | null
          preferred_foot?: never
          right_foot_label?: never
          right_foot_level?: number | null
          strong_foot_level?: never
          weak_foot_label?: never
          weak_foot_level?: never
        }
        Relationships: []
      }
    }
    Functions: {
      delete_player_position: {
        Args: {
          p_player_id: number
          p_position: Database["public"]["Enums"]["position_code"]
        }
        Returns: undefined
      }
      foot_label: { Args: { level: number }; Returns: string }
      save_player_position: {
        Args: {
          p_make_primary: boolean
          p_player_id: number
          p_position: Database["public"]["Enums"]["position_code"]
          p_rating: number
        }
        Returns: undefined
      }
      set_primary_position: {
        Args: {
          p_player_id: number
          p_position: Database["public"]["Enums"]["position_code"]
        }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "editor"
      attribute_entity: "player" | "coach"
      position_code:
        | "GK"
        | "LB"
        | "RB"
        | "CB"
        | "LWB"
        | "RWB"
        | "DM"
        | "CM"
        | "LM"
        | "RM"
        | "AM"
        | "LW"
        | "RW"
        | "ST"
      preferred_foot: "left" | "right" | "both"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
      attribute_entity: ["player", "coach"],
      position_code: [
        "GK",
        "LB",
        "RB",
        "CB",
        "LWB",
        "RWB",
        "DM",
        "CM",
        "LM",
        "RM",
        "AM",
        "LW",
        "RW",
        "ST",
      ],
      preferred_foot: ["left", "right", "both"],
    },
  },
} as const
