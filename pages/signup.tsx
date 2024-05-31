import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      setLoading(true);
      const res = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || 'Something went wrong');
        return;
      }

      router.push('/login');
    } catch (error) {
      console.error('An unexpected error happened:', error);
      setLoading(false);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Header />
    <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <Link href="/login">
                Click here (Sign In)
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.5rem', marginTop: '0.5rem', width: '100%', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.5rem', marginTop: '0.5rem', width: '100%', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.5rem', marginTop: '0.5rem', width: '100%', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.5rem', marginTop: '0.5rem', width: '100%', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{ padding: '0.5rem 1rem', marginTop: '1rem', fontSize: '1rem', backgroundColor: loading ? '#ccc' : '#4F46E5', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Add Main Member
            </h2>
            <button
              onClick={() => router.push('/mainmember')}
              style={{ padding: '0.5rem 1rem', marginTop: '1rem', fontSize: '1rem', backgroundColor: '#4F46E5', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
            >
              Add Main Member
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Add Family Members
            </h2>
            <p className="mt-2 text-base text-gray-600">
              You can add family members' details to manage all in one place.
            </p>
            <button
              onClick={() => router.push('/familyform')}
              style={{ padding: '0.5rem 1rem', marginTop: '1rem', fontSize: '1rem', backgroundColor: '#4F46E5', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
            >
              Add Family Members
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}
