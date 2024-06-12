"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === "admin" && password === "admin") {
      localStorage.setItem("user", JSON.stringify({ userId }));
      setMessage("로그인 성공!");
      router.push("/admin");
    } else {
      setMessage("잘못된 자격 증명");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>로그인 정보를 입력하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="userId">사용자 ID</Label>
                <Input
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="사용자 ID를 입력하세요"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
            </div>
            <div className="pt-3">{message && <p>{message}</p>}</div>
            <div className="flex justify-between mt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setUserId("");
                  setPassword("");
                  setMessage("");
                }}
              >
                취소
              </Button>
              <Button type="submit">로그인</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
