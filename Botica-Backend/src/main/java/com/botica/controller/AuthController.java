package com.botica.controller;

import com.botica.entity.Usuario;
import com.botica.security.JwtUtil;
import com.botica.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtUtil jwtUtil;

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody Usuario usuario) {
        try {
            usuarioService.save(usuario);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Usuario registrado exitosamente");
            return ResponseEntity.status(HttpStatus.CREATED).body(response); // Usar HttpStatus.CREATED para registro exitoso
        } catch (DataIntegrityViolationException e) { // Captura específica para username duplicado
            logger.warn("Intento de registro con username duplicado: {}", usuario.getUsername());
            Map<String, String> response = new HashMap<>();
            response.put("error", "El nombre de usuario ya existe.");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Error al registrar usuario");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        try {
            String username = loginRequest.get("username");
            String password = loginRequest.get("password");

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            Optional<Usuario> usuario = usuarioService.findByUsername(username);
            String token = jwtUtil.generateToken(username, usuario.get().getRole()); // El método generateToken ahora espera un Role enum

            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("role", usuario.get().getRole().name()); // Devolver el nombre del enum

            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Credenciales inválidas");
            return ResponseEntity.badRequest().body(response);
        }
    }
}
