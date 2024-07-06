terraform {
  backend "s3" {
    bucket         = "backend-fiap"
    key            = "fiap_lanches_app/terraform.tfstate"
    region         = "us-east-2"
    
  }
}
