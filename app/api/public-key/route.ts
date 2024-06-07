import { NextResponse } from "next/server"

export async function GET(){
    try{


        const data = {
            public_key: "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxEdKLEk2xK/k7X1gfbGH+K4bPF7TC+1g8DpzEnYQzEOWEnmFwibhzl6UwTy4ItyOKUWEeLfjpCUHSzZ+vPMDjrb8VKj6RbJOwSMjM83A8rgPpvNWmsuq/ZLskBat+qWZiV+JiCSs3SFbMyrzPQKEolZgHQOeUlM7RTIVZJnwAqaWO4/v1+FVm4/2rLXNAr5oL/8XczGG0swURTcVdriwUK3XW6eIXQe74lC/MxJmNdxnWFaKaQCbCrnsoWAj7CHBwa+u8QnhFoX0JljWYFOH/B1mGzoVlzZMRi1X9NmhgUNiy3Ust/BZJVaETaDE2SWCsGMqjePH0COMOLdWNNDU+QIDAQAB-----END PUBLIC KEY-----",
            created_at: 1717674476733
          };
        
          return NextResponse.json(data);

    }catch(err){
        return new NextResponse("internal error", {status: 500})
    }
}