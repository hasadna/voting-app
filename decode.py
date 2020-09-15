import sys
import rsa
import base64
import json

if __name__ == '__main__':
    priv = rsa.PrivateKey.load_pkcs1(open('private.pem').read())
    enc = base64.b64decode(sys.argv[1])
    dec = rsa.decrypt(enc, priv).decode('ascii')
    uid, votes = dec.split('|') 
    votes = json.loads(votes)
    print(uid)
    print(votes)
