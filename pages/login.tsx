// pages/login.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const containerStyles = {
  minHeight: '100vh',
  backgroundColor: '#f3f4f6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
};

const loginContainerStyles = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '0.5rem',
  boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
};

const titleStyles = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const formInputStyles = {
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '0.25rem',
};

const loginButtonStyles = {
  backgroundColor: '#1a91da',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const signupLinkTextStyles = {
  color: '#1a91da',
  textDecoration: 'underline',
  cursor: 'pointer',
};

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log("RES: ", res);
      if (res.status === 200) {
        // Save the token or navigate to a protected page
        router.push('/userPage');
      } else {
        alert(res.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdminLogin = () => {
    const enteredPassword = prompt('Please enter the admin password:');
    if (enteredPassword === 'Jalaj_P_Patel_6316') {
      router.push('/signup');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div style={containerStyles}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <div style={loginContainerStyles}>
            <h1 style={titleStyles}>Login</h1>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" style={{ fontWeight: 'bold' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={formInputStyles}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password" style={{ fontWeight: 'bold' }}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  style={formInputStyles}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" style={loginButtonStyles}>
                Login <ArrowRight size={20} style={{ display: 'inline' }} />
              </button>
            </form>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <p>
                Don't have an account?{' '}
                <Link href="/">
                  <span style={signupLinkTextStyles}>Sign up</span>
                </Link>
              </p>
            </div>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <button
                onClick={handleAdminLogin}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.25rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                Admin LogIn
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

