
rm *.pem

#  openssl req -x509 -newkey rsa:4096 -days 365 -keyout ca-key.pem -out ca-cert.pem -subj "/C = US/ST = OH/L = Toledo/O = SkFoods/OU = :SkFoods/CN = :SkFoods/emailAddress = skkitchenstore@gmail.com"


# echo "CA's self signed certs"
# openssl x509 -in ca-cert.pem -noout -text



#  openssl req  -newkey rsa:4096 -keyout server-key.pem -out server-req.pem -subj "/C = US/ST = OH/L = Toledo/O = SkFoods/OU = :SkFoods/CN = :SkFoods/emailAddress = skkitchenstore@gmail.com"
