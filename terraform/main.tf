resource "aws_s3_bucket" "portfolio_website" {
  bucket = "jawad-portfolio-bucket77"
}


resource "aws_s3_bucket_website_configuration" "example" {
  bucket = aws_s3_bucket.portfolio_website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_acl" "example" {
  depends_on = [
    aws_s3_bucket_ownership_controls.portfolio_website,
    aws_s3_bucket_public_access_block.portfolio_website,
  ]

  bucket = aws_s3_bucket.portfolio_website.id
  acl    = "public-read"
}

resource "aws_s3_bucket_public_access_block" "portfolio_website" {
  bucket = aws_s3_bucket.portfolio_website.bucket

  block_public_acls   = false
  ignore_public_acls  = false
  block_public_policy = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_ownership_controls" "portfolio_website" {
  bucket = aws_s3_bucket.portfolio_website.bucket

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_policy" "resume_website_policy" {
  bucket = aws_s3_bucket.portfolio_website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadForGetBucketObjects"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.portfolio_website.arn}/*"
      }
    ]
  })
}


resource "aws_route53_record" "jawadify_xyz" {
  zone_id = "Z01132021JQZL6I9CF08A"  
  name    = "jawadshahid.dev"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.my_distribution.domain_name
    zone_id                = "Z2FDTNDATAQYW2"  
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_jawadshahid_dev" {
  zone_id = "Z01132021JQZL6I9CF08A" 
  name    = "www.jawadshahid.dev"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_cloudfront_distribution.my_distribution.domain_name]
}

resource "aws_cloudfront_distribution" "my_distribution" {
  origin {
    domain_name = "jawad-portfolio-bucket77.s3.us-east-1.amazonaws.com" 
    origin_id   = "S3Origin"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:637423471197:certificate/3c22533a-641e-458f-8e3b-8235f9c53913"  
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = ["jawadshahid.dev", "www.jawadshahid.dev"]
}
