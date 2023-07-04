{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs";
    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs @ { self, ... }:
    (inputs.flake-utils.lib.eachDefaultSystem (system:
      let

        pkgs = import inputs.nixpkgs {
          inherit system;
          overlays = [ inputs.rust-overlay.overlays.default ];
        };

        rust-config = {
          extensions = [ "rust-src" ];
        };

        rust = (pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain).override rust-config;

        # rust-nightly used for advanced options in rustfmt
        rust-nightly = pkgs.rust-bin.nightly.latest.default.override rust-config;

        shellPkgs = [
          rust
        ] ++ (with pkgs; [
          clang
          just
          mdbook
          mdbook-mermaid
          nodejs
          protoc-gen-rust
          protobuf
        ]);

      in
      rec {

        devShells = {
          default = pkgs.mkShell {
            nativeBuildInputs = shellPkgs;
          };
          rust-nightly = pkgs.mkShell {
            nativeBuildInputs = [ rust-nightly ];
          };
        };

      }));
}
