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
      alert_configurations: {
        Row: {
          created_at: string
          id: string
          thresholds: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          thresholds?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          thresholds?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action_type: string
          changes: Json | null
          created_at: string
          entity_id: string
          entity_type: string
          id: string
          ip_address: string | null
          new_state: Json | null
          previous_state: Json | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          changes?: Json | null
          created_at: string
          entity_id: string
          entity_type: string
          id?: string
          ip_address?: string | null
          new_state?: Json | null
          previous_state?: Json | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          changes?: Json | null
          created_at?: string
          entity_id?: string
          entity_type?: string
          id?: string
          ip_address?: string | null
          new_state?: Json | null
          previous_state?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      client_activities: {
        Row: {
          activity_type: string
          client_id: string
          created_at: string
          description: string
          id: string
          user_id: string
        }
        Insert: {
          activity_type: string
          client_id: string
          created_at?: string
          description: string
          id?: string
          user_id: string
        }
        Update: {
          activity_type?: string
          client_id?: string
          created_at?: string
          description?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_activities_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "unified_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      entity_images: {
        Row: {
          content_type: string | null
          created_at: string | null
          description: string | null
          entity_id: string
          entity_type: string
          filename: string
          id: string
          metadata: Json | null
          size_bytes: number | null
          storage_path: string
          user_id: string
        }
        Insert: {
          content_type?: string | null
          created_at?: string | null
          description?: string | null
          entity_id: string
          entity_type: string
          filename: string
          id?: string
          metadata?: Json | null
          size_bytes?: number | null
          storage_path: string
          user_id: string
        }
        Update: {
          content_type?: string | null
          created_at?: string | null
          description?: string | null
          entity_id?: string
          entity_type?: string
          filename?: string
          id?: string
          metadata?: Json | null
          size_bytes?: number | null
          storage_path?: string
          user_id?: string
        }
        Relationships: []
      }
      error_logs: {
        Row: {
          context: Json | null
          created_at: string
          entity_id: string | null
          entity_type: string | null
          id: string
          message: string
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          source: string
          stack_trace: string | null
          user_id: string | null
        }
        Insert: {
          context?: Json | null
          created_at: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          message: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity: string
          source: string
          stack_trace?: string | null
          user_id?: string | null
        }
        Update: {
          context?: Json | null
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          message?: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          source?: string
          stack_trace?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      expense_categories: {
        Row: {
          color: string
          created_at: string
          description: string | null
          id: string
          name: string
          team_id: string
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          team_id: string
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_expense_categories_team"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      income_categories: {
        Row: {
          color: string
          created_at: string
          description: string | null
          id: string
          name: string
          team_id: string
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          team_id: string
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_income_categories_team"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          created_at: string
          description: string
          id: string
          invoice_id: string
          quantity: number
          unit_price: number
          vat_rate: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          invoice_id: string
          quantity?: number
          unit_price: number
          vat_rate?: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number
          unit_price?: number
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_invoice_items_invoice"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_line_items: {
        Row: {
          created_at: string
          description: string
          id: string
          invoice_id: string
          item_order: number
          quantity: number
          total: number
          type: string
          unit: string | null
          unit_price: number
          updated_at: string
          user_id: string
          vat_rate: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          invoice_id: string
          item_order?: number
          quantity?: number
          total?: number
          type?: string
          unit?: string | null
          unit_price?: number
          updated_at?: string
          user_id: string
          vat_rate?: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          invoice_id?: string
          item_order?: number
          quantity?: number
          total?: number
          type?: string
          unit?: string | null
          unit_price?: number
          updated_at?: string
          user_id?: string
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_line_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number
          apply_cis: boolean | null
          cis_amount: number | null
          cis_rate: number | null
          client_id: string
          created_at: string
          due_date: string
          id: string
          invoice_number: string
          job_id: string | null
          last_reminder_sent: string | null
          notes: string | null
          paid_date: string | null
          payment_enabled: boolean | null
          payment_link_id: string | null
          pdf_url: string | null
          status: string
          template_id: string | null
          total_paid: number | null
          updated_at: string
          user_id: string
          vat_amount: number | null
        }
        Insert: {
          amount: number
          apply_cis?: boolean | null
          cis_amount?: number | null
          cis_rate?: number | null
          client_id: string
          created_at?: string
          due_date: string
          id?: string
          invoice_number: string
          job_id?: string | null
          last_reminder_sent?: string | null
          notes?: string | null
          paid_date?: string | null
          payment_enabled?: boolean | null
          payment_link_id?: string | null
          pdf_url?: string | null
          status?: string
          template_id?: string | null
          total_paid?: number | null
          updated_at?: string
          user_id: string
          vat_amount?: number | null
        }
        Update: {
          amount?: number
          apply_cis?: boolean | null
          cis_amount?: number | null
          cis_rate?: number | null
          client_id?: string
          created_at?: string
          due_date?: string
          id?: string
          invoice_number?: string
          job_id?: string | null
          last_reminder_sent?: string | null
          notes?: string | null
          paid_date?: string | null
          payment_enabled?: boolean | null
          payment_link_id?: string | null
          pdf_url?: string | null
          status?: string
          template_id?: string | null
          total_paid?: number | null
          updated_at?: string
          user_id?: string
          vat_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_invoices_client"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "unified_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_invoices_job"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "unified_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_attachments: {
        Row: {
          created_at: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          job_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          job_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          job_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_job_attachments_job"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "unified_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_materials: {
        Row: {
          created_at: string
          description: string
          id: string
          is_purchased: boolean
          job_id: string
          purchase_date: string | null
          quantity: number
          unit_price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_purchased?: boolean
          job_id: string
          purchase_date?: string | null
          quantity?: number
          unit_price?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_purchased?: boolean
          job_id?: string
          purchase_date?: string | null
          quantity?: number
          unit_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_materials_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "unified_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      line_items: {
        Row: {
          created_at: string
          description: string
          id: string
          item_order: number
          quantity: number
          quote_id: string
          total: number
          type: string
          unit: string | null
          unit_price: number
          updated_at: string
          user_id: string
          vat_rate: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          item_order?: number
          quantity?: number
          quote_id: string
          total?: number
          type?: string
          unit?: string | null
          unit_price?: number
          updated_at?: string
          user_id: string
          vat_rate?: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          item_order?: number
          quantity?: number
          quote_id?: string
          total?: number
          type?: string
          unit?: string | null
          unit_price?: number
          updated_at?: string
          user_id?: string
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "line_items_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          created_at: string
          email_notifications: boolean | null
          id: string
          push_notifications: boolean | null
          sms_notifications: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_notifications?: boolean | null
          id?: string
          push_notifications?: boolean | null
          sms_notifications?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_notifications?: boolean | null
          id?: string
          push_notifications?: boolean | null
          sms_notifications?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      operation_retry_queue: {
        Row: {
          completed_at: string | null
          created_at: string
          entity_id: string
          entity_type: string
          id: string
          last_error: string | null
          locked_by: string | null
          locked_until: string | null
          max_retries: number | null
          next_retry_at: string | null
          operation_type: string
          parameters: Json
          retry_count: number | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          entity_id: string
          entity_type: string
          id?: string
          last_error?: string | null
          locked_by?: string | null
          locked_until?: string | null
          max_retries?: number | null
          next_retry_at?: string | null
          operation_type: string
          parameters: Json
          retry_count?: number | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          entity_id?: string
          entity_type?: string
          id?: string
          last_error?: string | null
          locked_by?: string | null
          locked_until?: string | null
          max_retries?: number | null
          next_retry_at?: string | null
          operation_type?: string
          parameters?: Json
          retry_count?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          business_address: string | null
          cis_rate: number | null
          cis_registered: boolean | null
          cis_registration_number: string | null
          cis_verification_number: string | null
          company_name: string | null
          created_at: string
          default_vat_rate: number | null
          id: string
          last_seen_at: string | null
          logo_url: string | null
          phone: string | null
          stripe_account_id: string | null
          stripe_account_status: string | null
          stripe_enabled: boolean | null
          stripe_onboarding_completed: boolean | null
          subscription_end_date: string | null
          subscription_start_date: string | null
          subscription_status: string | null
          subscription_tier_id: string | null
          trade_type: string | null
          updated_at: string
          vat_number: string | null
        }
        Insert: {
          business_address?: string | null
          cis_rate?: number | null
          cis_registered?: boolean | null
          cis_registration_number?: string | null
          cis_verification_number?: string | null
          company_name?: string | null
          created_at?: string
          default_vat_rate?: number | null
          id: string
          last_seen_at?: string | null
          logo_url?: string | null
          phone?: string | null
          stripe_account_id?: string | null
          stripe_account_status?: string | null
          stripe_enabled?: boolean | null
          stripe_onboarding_completed?: boolean | null
          subscription_end_date?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          subscription_tier_id?: string | null
          trade_type?: string | null
          updated_at?: string
          vat_number?: string | null
        }
        Update: {
          business_address?: string | null
          cis_rate?: number | null
          cis_registered?: boolean | null
          cis_registration_number?: string | null
          cis_verification_number?: string | null
          company_name?: string | null
          created_at?: string
          default_vat_rate?: number | null
          id?: string
          last_seen_at?: string | null
          logo_url?: string | null
          phone?: string | null
          stripe_account_id?: string | null
          stripe_account_status?: string | null
          stripe_enabled?: boolean | null
          stripe_onboarding_completed?: boolean | null
          subscription_end_date?: string | null
          subscription_start_date?: string | null
          subscription_status?: string | null
          subscription_tier_id?: string | null
          trade_type?: string | null
          updated_at?: string
          vat_number?: string | null
        }
        Relationships: []
      }
      quote_attachments: {
        Row: {
          created_at: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          quote_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          quote_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          quote_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      quotes: {
        Row: {
          client_details_snapshot: Json | null
          client_id: string | null
          created_at: string
          expiry_date: string | null
          id: string
          issue_date: string | null
          job_id: string | null
          notes: string | null
          quote_number: string | null
          status: string
          subtotal: number
          terms: string | null
          total: number
          updated_at: string
          user_id: string
          vat_total: number
        }
        Insert: {
          client_details_snapshot?: Json | null
          client_id?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          job_id?: string | null
          notes?: string | null
          quote_number?: string | null
          status?: string
          subtotal?: number
          terms?: string | null
          total?: number
          updated_at?: string
          user_id: string
          vat_total?: number
        }
        Update: {
          client_details_snapshot?: Json | null
          client_id?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          job_id?: string | null
          notes?: string | null
          quote_number?: string | null
          status?: string
          subtotal?: number
          terms?: string | null
          total?: number
          updated_at?: string
          user_id?: string
          vat_total?: number
        }
        Relationships: []
      }
      team_members: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          invitation_status: string
          invitation_token: string
          member_id: string
          name: string
          permissions_level: string
          phone: string | null
          role: string | null
          team_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          id?: string
          invitation_status?: string
          invitation_token?: string
          member_id: string
          name: string
          permissions_level?: string
          phone?: string | null
          role?: string | null
          team_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          invitation_status?: string
          invitation_token?: string
          member_id?: string
          name?: string
          permissions_level?: string
          phone?: string | null
          role?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_team_members_team"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          id: string
          name: string
          owner_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          owner_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      time_logs: {
        Row: {
          created_at: string
          duration: number | null
          end_time: string | null
          id: string
          job_id: string
          notes: string | null
          start_time: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration?: number | null
          end_time?: string | null
          id?: string
          job_id: string
          notes?: string | null
          start_time: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration?: number | null
          end_time?: string | null
          id?: string
          job_id?: string
          notes?: string | null
          start_time?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_logs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "unified_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      unified_clients: {
        Row: {
          address: string | null
          client_status: string
          communication_preference: string | null
          company_name: string | null
          created_at: string
          email: string | null
          first_name: string
          id: string
          invoice_email: string | null
          last_contacted: string | null
          last_name: string
          marketing_consent: boolean
          notes: string | null
          phone: string | null
          reminder_date: string | null
          send_invoice_reminders: boolean
          source: string | null
          tags: string[] | null
          updated_at: string
          user_id: string
          website: string | null
        }
        Insert: {
          address?: string | null
          client_status?: string
          communication_preference?: string | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          first_name: string
          id?: string
          invoice_email?: string | null
          last_contacted?: string | null
          last_name: string
          marketing_consent?: boolean
          notes?: string | null
          phone?: string | null
          reminder_date?: string | null
          send_invoice_reminders?: boolean
          source?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
          website?: string | null
        }
        Update: {
          address?: string | null
          client_status?: string
          communication_preference?: string | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          first_name?: string
          id?: string
          invoice_email?: string | null
          last_contacted?: string | null
          last_name?: string
          marketing_consent?: boolean
          notes?: string | null
          phone?: string | null
          reminder_date?: string | null
          send_invoice_reminders?: boolean
          source?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      unified_jobs: {
        Row: {
          actual_cost: number | null
          client_id: string
          completed_at: string | null
          created_at: string
          description: string | null
          end_time: string | null
          estimated_cost: number | null
          estimated_duration: number | null
          follow_up_due_at: string | null
          id: string
          image_urls: string[] | null
          invoice_id: string | null
          is_starred: boolean | null
          last_activity_at: string | null
          location: string | null
          location_notes: string | null
          notes: string | null
          priority: string | null
          quote_id: string | null
          requires_site_visit: boolean | null
          site_visit_completed: boolean | null
          site_visit_notes: string | null
          site_visit_scheduled_date: string | null
          source: string | null
          start_time: string | null
          status: string
          submitted_via_slug: string | null
          title: string
          total_time_spent: number | null
          updated_at: string
          user_id: string
          waiting_time_ms: number | null
        }
        Insert: {
          actual_cost?: number | null
          client_id: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          end_time?: string | null
          estimated_cost?: number | null
          estimated_duration?: number | null
          follow_up_due_at?: string | null
          id?: string
          image_urls?: string[] | null
          invoice_id?: string | null
          is_starred?: boolean | null
          last_activity_at?: string | null
          location?: string | null
          location_notes?: string | null
          notes?: string | null
          priority?: string | null
          quote_id?: string | null
          requires_site_visit?: boolean | null
          site_visit_completed?: boolean | null
          site_visit_notes?: string | null
          site_visit_scheduled_date?: string | null
          source?: string | null
          start_time?: string | null
          status?: string
          submitted_via_slug?: string | null
          title: string
          total_time_spent?: number | null
          updated_at?: string
          user_id: string
          waiting_time_ms?: number | null
        }
        Update: {
          actual_cost?: number | null
          client_id?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          end_time?: string | null
          estimated_cost?: number | null
          estimated_duration?: number | null
          follow_up_due_at?: string | null
          id?: string
          image_urls?: string[] | null
          invoice_id?: string | null
          is_starred?: boolean | null
          last_activity_at?: string | null
          location?: string | null
          location_notes?: string | null
          notes?: string | null
          priority?: string | null
          quote_id?: string | null
          requires_site_visit?: boolean | null
          site_visit_completed?: boolean | null
          site_visit_notes?: string | null
          site_visit_scheduled_date?: string | null
          source?: string | null
          start_time?: string | null
          status?: string
          submitted_via_slug?: string | null
          title?: string
          total_time_spent?: number | null
          updated_at?: string
          user_id?: string
          waiting_time_ms?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_unified_jobs_client"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "unified_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_unified_jobs_invoice"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          role?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_invoice_from_job: {
        Args: { p_job_id: string }
        Returns: string
      }
      exec_sql: {
        Args: { sql: string }
        Returns: undefined
      }
      find_user_by_booking_slug: {
        Args: { slug: string }
        Returns: {
          user_id: string
          business_name: string
        }[]
      }
      generate_next_invoice_number: {
        Args: { p_user_id: string }
        Returns: string
      }
      get_client_details_with_activity: {
        Args: { p_client_id: string }
        Returns: Json
      }
      get_invoice_details: {
        Args: { p_invoice_id: string }
        Returns: {
          invoice: Json
          line_items: Json
        }[]
      }
      get_invoice_list: {
        Args: {
          p_limit?: number
          p_offset?: number
          p_status?: string
          p_search?: string
        }
        Returns: {
          amount: number
          apply_cis: boolean | null
          cis_amount: number | null
          cis_rate: number | null
          client_id: string
          created_at: string
          due_date: string
          id: string
          invoice_number: string
          job_id: string | null
          last_reminder_sent: string | null
          notes: string | null
          paid_date: string | null
          payment_enabled: boolean | null
          payment_link_id: string | null
          pdf_url: string | null
          status: string
          template_id: string | null
          total_paid: number | null
          updated_at: string
          user_id: string
          vat_amount: number | null
        }[]
      }
      get_job_details: {
        Args: { job_id: string } | { p_job_id: string }
        Returns: {
          job_data: Json
          client_data: Json
          quote_data: Json
        }[]
      }
      get_mock_job: {
        Args: { p_job_id: string }
        Returns: {
          actual_cost: number | null
          client_id: string
          completed_at: string | null
          created_at: string
          description: string | null
          end_time: string | null
          estimated_cost: number | null
          estimated_duration: number | null
          follow_up_due_at: string | null
          id: string
          image_urls: string[] | null
          invoice_id: string | null
          is_starred: boolean | null
          last_activity_at: string | null
          location: string | null
          location_notes: string | null
          notes: string | null
          priority: string | null
          quote_id: string | null
          requires_site_visit: boolean | null
          site_visit_completed: boolean | null
          site_visit_notes: string | null
          site_visit_scheduled_date: string | null
          source: string | null
          start_time: string | null
          status: string
          submitted_via_slug: string | null
          title: string
          total_time_spent: number | null
          updated_at: string
          user_id: string
          waiting_time_ms: number | null
        }[]
      }
      get_my_booking_slug: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_profile: {
        Args: { user_id: string }
        Returns: {
          business_address: string | null
          cis_rate: number | null
          cis_registered: boolean | null
          cis_registration_number: string | null
          cis_verification_number: string | null
          company_name: string | null
          created_at: string
          default_vat_rate: number | null
          id: string
          last_seen_at: string | null
          logo_url: string | null
          phone: string | null
          stripe_account_id: string | null
          stripe_account_status: string | null
          stripe_enabled: boolean | null
          stripe_onboarding_completed: boolean | null
          subscription_end_date: string | null
          subscription_start_date: string | null
          subscription_status: string | null
          subscription_tier_id: string | null
          trade_type: string | null
          updated_at: string
          vat_number: string | null
        }[]
      }
      get_scheduled_jobs: {
        Args: { p_start_date: string; p_end_date: string }
        Returns: {
          actual_cost: number | null
          client_id: string
          completed_at: string | null
          created_at: string
          description: string | null
          end_time: string | null
          estimated_cost: number | null
          estimated_duration: number | null
          follow_up_due_at: string | null
          id: string
          image_urls: string[] | null
          invoice_id: string | null
          is_starred: boolean | null
          last_activity_at: string | null
          location: string | null
          location_notes: string | null
          notes: string | null
          priority: string | null
          quote_id: string | null
          requires_site_visit: boolean | null
          site_visit_completed: boolean | null
          site_visit_notes: string | null
          site_visit_scheduled_date: string | null
          source: string | null
          start_time: string | null
          status: string
          submitted_via_slug: string | null
          title: string
          total_time_spent: number | null
          updated_at: string
          user_id: string
          waiting_time_ms: number | null
        }[]
      }
      get_team_members: {
        Args: { p_team_id: string }
        Returns: {
          member_id: string
          role: string
          created_at: string
        }[]
      }
      get_unified_job: {
        Args: { p_job_id: string }
        Returns: {
          id: string
          title: string
          description: string
          status: string
          user_id: string
          client_id: string
          quote_id: string
          location: string
          start_time: string
          end_time: string
          estimated_duration: number
          priority: number
          created_at: string
          updated_at: string
          completed_at: string
          cost: number
          notes: string
          source: string
          tags: string[]
        }[]
      }
      get_user_teams: {
        Args: { p_user_id?: string }
        Returns: {
          created_at: string
          id: string
          name: string
          owner_id: string
          updated_at: string
        }[]
      }
      handle_mock_job_id: {
        Args: { job_id: string }
        Returns: {
          actual_cost: number | null
          client_id: string
          completed_at: string | null
          created_at: string
          description: string | null
          end_time: string | null
          estimated_cost: number | null
          estimated_duration: number | null
          follow_up_due_at: string | null
          id: string
          image_urls: string[] | null
          invoice_id: string | null
          is_starred: boolean | null
          last_activity_at: string | null
          location: string | null
          location_notes: string | null
          notes: string | null
          priority: string | null
          quote_id: string | null
          requires_site_visit: boolean | null
          site_visit_completed: boolean | null
          site_visit_notes: string | null
          site_visit_scheduled_date: string | null
          source: string | null
          start_time: string | null
          status: string
          submitted_via_slug: string | null
          title: string
          total_time_spent: number | null
          updated_at: string
          user_id: string
          waiting_time_ms: number | null
        }[]
      }
      has_permission: {
        Args: { check_user_id: string; required_role: string }
        Returns: boolean
      }
      is_admin: {
        Args: { check_user_id: string }
        Returns: boolean
      }
      is_team_member: {
        Args: { team_id: string; user_id?: string }
        Returns: boolean
      }
      migrate_to_unified_models: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      record_payment: {
        Args: {
          p_invoice_id: string
          p_amount_paid: number
          p_payment_date?: string
        }
        Returns: boolean
      }
      save_invoice_details: {
        Args: { p_invoice_data: Json; p_line_items: Json }
        Returns: string
      }
      submit_public_enquiry: {
        Args: {
          p_booking_slug: string
          p_client_name: string
          p_phone: string
          p_description: string
          p_location?: string
          p_email?: string
        }
        Returns: string
      }
      update_invoice_status: {
        Args: { p_invoice_id: string; p_new_status: string }
        Returns: boolean
      }
      update_job_status: {
        Args: { job_id: string; new_status: string }
        Returns: {
          actual_cost: number | null
          client_id: string
          completed_at: string | null
          created_at: string
          description: string | null
          end_time: string | null
          estimated_cost: number | null
          estimated_duration: number | null
          follow_up_due_at: string | null
          id: string
          image_urls: string[] | null
          invoice_id: string | null
          is_starred: boolean | null
          last_activity_at: string | null
          location: string | null
          location_notes: string | null
          notes: string | null
          priority: string | null
          quote_id: string | null
          requires_site_visit: boolean | null
          site_visit_completed: boolean | null
          site_visit_notes: string | null
          site_visit_scheduled_date: string | null
          source: string | null
          start_time: string | null
          status: string
          submitted_via_slug: string | null
          title: string
          total_time_spent: number | null
          updated_at: string
          user_id: string
          waiting_time_ms: number | null
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
