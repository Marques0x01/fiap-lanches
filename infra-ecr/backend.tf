terraform {
  backend "s3" {
    bucket         = "tfstate-fiap"
    key            = "fiap-lanches-app/terraform.tfstate"
    region         = "us-east-1"
    
  }
}
