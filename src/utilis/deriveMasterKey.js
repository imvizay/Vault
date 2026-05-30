import { argon2id } from 'hash-wasm';

export const deriveMasterKey = async ( password, salt ) => {

  const result = await argon2id({
    password,
    salt,
    parallelism: 1,
    iterations: 3,
    memorySize: 65536,
    hashLength: 32,
    outputType: 'binary'
  })

  const masterKey =
    await crypto.subtle.importKey(
      'raw',
      result,
      {
        name: 'AES-GCM'
      },
      true,
      ['encrypt', 'decrypt']
    )

  return masterKey
}