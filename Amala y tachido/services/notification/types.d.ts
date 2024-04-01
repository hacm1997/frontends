/**
 * TypeFormEmail
 * 
 * @param sender remitente
 * @param message cuerpo del mensaje
 * @param receivers destinatarios
 * @param subject asunto
 */

export interface TypeEmail {
  sender?: string
  receivers?: string[]
  message?: string
  subject?: string
}
