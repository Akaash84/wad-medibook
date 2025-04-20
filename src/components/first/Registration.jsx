import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Registration.css";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Check if username already exists
      const existingUserRes = await fetch(`http://localhost:3000/users?username=${data.username}`);
      const existingUsers = await existingUserRes.json();

      if (existingUsers.length > 0) {
        throw new Error("Username already exists. Please choose another one.");
      }

      // Proceed to register the user
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <main className="register-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card register-card">
                <div className="card-body">
                  <h3 className="text-center mb-4">Create Account</h3>

                  {error && (
                    <div className="alert alert-danger">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName.message}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName.message}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                              value: /^\d{10}$/,
                              message: "Phone must be 10 digits",
                            },
                          })}
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone.message}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                          {...register("username", {
                            required: "Username is required",
                            minLength: {
                              value: 4,
                              message: "Username must be at least 4 characters",
                            },
                          })}
                        />
                        {errors.username && (
                          <div className="invalid-feedback">{errors.username.message}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          })}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Registration;
