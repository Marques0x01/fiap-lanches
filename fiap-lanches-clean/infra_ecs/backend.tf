terraform {
  backend "s3" {
    bucket         = "tfstates-fiap-lanches"
    key            = "fiap_lanches_app/terraform.tfstate"
    region         = "us-east-2"
    
  }
}
