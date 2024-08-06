import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card.tsx';
import { Input } from '../../components/ui/input.tsx';
import { Label } from '../../components/ui/label.tsx';
import { Button } from '../../components/ui/button.tsx';

const SignUp: React.FC = () => {

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="foo123@bar.com" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
          <Label htmlFor="pwssword">Password</Label>
          <Input type="password" id="password" placeholder="비밀번호는 8~12 글자 사이 특수문자를 포함한 영문자" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
          <Label htmlFor="passwordConfirm">Password Confirm</Label>
          <Input type="password" id="passwordConfirm" placeholder="비밀번호를 확인해주세요." />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
          <Label htmlFor="name">name</Label>
          <Input type="text" id="name" placeholder="10글자 사이의 이름을 입력해주세요." />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="">Submit</Button>
      </CardFooter>
    </Card>
  );

};

export default SignUp;
