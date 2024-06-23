terraform {
  backend "s3" {
    bucket         = "fiap-backend"
    key            = "fiap_lanches_app/terraform.tfstate"
    region         = "us-east-1"
    
  }
}
