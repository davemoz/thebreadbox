import { loginAction } from "@/actions/auth";

export default function LoginForm({ error }: { error?: string }) {
  return (
    <div>
      {error && <div className="error">{error}</div>}
      <form action={loginAction}>
        <div>
          <p>Log in:</p>
        </div>
        <label>
          Email: <input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
