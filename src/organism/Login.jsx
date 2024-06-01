
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from '../assets/Images/logo.png'


export function ComponentLogin() {
    return (
            <Card className="bg-gray-400 w-96  rounded-2xl shadow-2xl shadow-black">
                <form className="flex flex-col gap-4">
                    <div className='flex flex-col items-center'>
                        <label htmlFor="" className='font-bold text-2xl text-blue-900 mt-5 font-serif text-nowrap'>Welcome to Pride Products</label>
                        <img src={Logo} alt="Logo" className='w-32 h-32 mb-1' />
                        <label htmlFor="" className='font-bold text-3xl text-yellow-200'>Login</label>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="dinuk@gmail.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
    );
}


