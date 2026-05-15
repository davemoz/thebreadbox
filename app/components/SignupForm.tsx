import { signupAction } from "@/actions/auth";

export default function SignupForm({ error }: { error?: string }) {
  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form action={signupAction}>
        <div>
          <p>Sign up:</p>
        </div>
        <label>
          Email: <input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            autoComplete="new-password"
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
