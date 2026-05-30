
import React from 'react'


async function saveMasterKeyInSession (masterKey) {
     try{
        const rawKey = await crypto.subtle.exportKey('raw',masterKey)
        console.log("RAW KEY",rawKey)
        const keyBase64 = btoa(
            String.fromCharCode(
                ...new Uint8Array(rawKey)
            )
        )

        sessionStorage.setItem('vaultkey',
            JSON.stringify({
                key:keyBase64,
                expires_at: Date.now() + (60 *60 * 1000)
            })
        )
    }
    catch (err) {

        console.error(
            "Failed to save key:",
            err
        )

    }


}

export default saveMasterKeyInSession