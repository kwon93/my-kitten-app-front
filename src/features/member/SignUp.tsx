import React, { ChangeEvent, useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card.tsx';
import { Input } from '../../components/ui/input.tsx';
import { Label } from '../../components/ui/label.tsx';
import { Button } from '../../components/ui/button.tsx';
import { SignUpData } from '../../types/member/SignUpData.ts';
import myKittenAxios from '../../api/axiosConfig.ts';
import { cn } from '../../lib/utils.ts';
import InvalidAlertPortal from '../../components/common/InvalidAlertPortal.tsx';
import { useNavigate } from 'react-router-dom';
import { InvalidSignUpInputMessage } from '../../types/member/InvalidSignUpInputMessage.ts';


const SignUp: React.FC = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });

  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [isInvalidSignUp, setIsInvalidSignUp] = useState(false);
  const [signUpValidationMessage, setSignUpValidationMessage] = useState<string>('');
  const navigate = useNavigate();

  const signUpInputHandler = (type: string, value: string) => {
    setSignUpData(prevState => ({
      ...prevState,
      [type]: value,
    }));
  };

  const handleSignUpSubmit = async () => {
    myKittenAxios.post('member/signup', signUpData)
      .then(response => {
        setIsSignUpSuccess(true);
        navigate('/');
        alert('SignUp Success!');
      })
      .catch((e) => {
        console.log(e);
        setSignUpValidationMessage(e.response?.data?.message[0]);
        setIsInvalidSignUp(true);
      });
  };

  return (
    <>
      <InvalidAlertPortal isOpen={isInvalidSignUp}
                          onClose={() => setIsInvalidSignUp(false)}
                          title="회원가입에 실패했다냥..."
                          description={signUpValidationMessage}
      />
      <Card className="mt-10" id="">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="foo123@bar.com"
                   onChange={(event: ChangeEvent<HTMLInputElement>) => signUpInputHandler('email', event.target.value)}
                   className={cn()}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="pwssword">Password</Label>
            <Input type="password" id="password" placeholder="비밀번호는 8~12 글자 사이 특수문자를 포함한 영문자"
                   onChange={(event: ChangeEvent<HTMLInputElement>) => signUpInputHandler('password', event.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="passwordConfirm">Password Confirm</Label>
            <Input type="password" id="passwordConfirm" placeholder="비밀번호를 확인해주세요."
                   onChange={(event: ChangeEvent<HTMLInputElement>) => signUpInputHandler('passwordConfirm', event.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="name">name</Label>
            <Input type="text" id="name" placeholder="10글자 사이의 이름을 입력해주세요."
                   onChange={(event: ChangeEvent<HTMLInputElement>) => signUpInputHandler('name', event.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="" onClick={handleSignUpSubmit}>JOIN</Button>
        </CardFooter>
      </Card>
    </>
  );

};

export default SignUp;
