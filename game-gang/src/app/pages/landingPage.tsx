import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
    return (
        <div>
      <h1>Welcome to Game Night!</h1>
      <p>Join us for an evening of fun and games!</p>

      <nav>
        <ul>
          <li>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Log In</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}
export default LandingPage; 