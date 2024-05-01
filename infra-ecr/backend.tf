terraform {
  backend "s3" {
    bucket         = "tfstates-fiap"
    key            = "fiap-lanches-app/terraform.tfstate"
    region         = "us-east-1"
    
  }
}
