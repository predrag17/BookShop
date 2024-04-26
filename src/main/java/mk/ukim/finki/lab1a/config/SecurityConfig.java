//package mk.ukim.finki.lab1a.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final PasswordEncoder passwordEncoder;
////    private final UserDetailsService userDetailsService;
//
//    public SecurityConfig(PasswordEncoder passwordEncoder) {
//        this.passwordEncoder = passwordEncoder;
//
//    }
//
//    @Bean
//    // TODO: If you are implementing the security requirements, remove this following bean creation
//    public WebSecurityCustomizer webSecurityCustomizer() {
//        return (web) -> web.ignoring().anyRequest();
//    }
//
////    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//        http
//                .csrf(AbstractHttpConfigurer::disable)
//                .authorizeHttpRequests((requests) -> requests
//                        .requestMatchers(AntPathRequestMatcher.antMatcher("/"), AntPathRequestMatcher.antMatcher("/home"))
//                        .permitAll()
//                        .requestMatchers(AntPathRequestMatcher.antMatcher("/countries"),
//                                AntPathRequestMatcher.antMatcher("/authors"),
//                                AntPathRequestMatcher.antMatcher("/books"))
//                        .hasAnyAuthority("ROLE_USER", "ROLE_LIBRARIAN")
//                        .anyRequest()
//                        .hasAuthority("ROLE_LIBRARIAN")
//                )
//                .formLogin((form) -> form
//                        .permitAll()
//                        .failureUrl("/login?error=BadCredentials")
//                        .defaultSuccessUrl("/", true)
//                )
//                .logout((logout) -> logout
//                        .logoutUrl("/logout")
//                        .clearAuthentication(true)
//                        .invalidateHttpSession(true)
//                        .deleteCookies("JSESSIONID")
//                        .logoutSuccessUrl("/home")
//                );
//
//        return http.build();
//    }
//
////    @Bean
//    public UserDetailsService userDetailsService() {
//        UserDetails user1 = User.builder()
//                .username("librarian")
//                .password(passwordEncoder.encode("librarian"))
//                .authorities("ROLE_LIBRARIAN")
//                .build();
//        UserDetails user2 = User.builder()
//                .username("user")
//                .password(passwordEncoder.encode("user"))
//                .authorities("ROLE_USER")
//                .build();
//
//
//        return new InMemoryUserDetailsManager(user1, user2);
//    }
//
//
////    @Bean
////    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
////        AuthenticationManagerBuilder authenticationManagerBuilder =
////                http.getSharedObject(AuthenticationManagerBuilder.class);
////        authenticationManagerBuilder.userDetailsService(userDetailsService);
////        return authenticationManagerBuilder.build();
////    }
//
//}
