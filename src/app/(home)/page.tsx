import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function FacebookLoginPage() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[396px] text-center mb-4">
        <Image
          draggable={false}
          width={300}
          height={106}
          alt="facebook"
          src="/facebook-icon.svg"
          className="mx-auto"
          style={{ color: "#1877f2" }}
        />
      </div>

      <Card className="w-full max-w-[396px]">
        <CardHeader>
          <h1 className="text-center text-[18px] leading-[22px] text-[#1c1e21]">
            Log Into Facebook
          </h1>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            type="text"
            placeholder="Email or phone number"
            className="h-[50px] text-[17px] text-lg"
          />
          <Input
            type="password"
            placeholder="Password"
            className="h-[50px] text-[17px] text-lg"
          />
          <Button
            type="submit"
            className="w-full h-[48px] text-[20px] font-bold bg-[#1877f2] hover:bg-[#166fe5]"
          >
            Log In
          </Button>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="text-[#1877f2] text-[16px] hover:underline"
            >
              Forgot password?
            </Link>
            <div className="my-4 border-b border-gray-200" />
            <Button
              type="button"
              className="bg-[#42b72a] hover:bg-[#36a420] h-[48px] px-4 text-[17px] font-bold"
            >
              Sign up for Facebook
            </Button>
          </div>
        </CardContent>
      </Card>

      <Footer />
    </div>
  );
}
