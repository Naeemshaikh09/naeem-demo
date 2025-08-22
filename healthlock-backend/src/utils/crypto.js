import crypto from 'crypto'

const algorithm = 'aes-256-cbc'

export const generateKeyAndIv = () => {
  const key = crypto.randomBytes(32)
  const iv = crypto.randomBytes(16)
  return { key, iv }
}

export const encryptBuffer = (buffer, key, iv) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()])
  return encrypted
}

export const decryptBuffer = (buffer, key, iv) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  const decrypted = Buffer.concat([decipher.update(buffer), decipher.final()])
  return decrypted
}

export const sha256Hex = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex')