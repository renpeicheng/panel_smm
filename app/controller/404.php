<!DOCTYPE html>
<html lang="tr">

<head>
    <title>Page not found!</title>
</head>
<style>
    html,
    body {
        background: #f8f9fa;
        width: 100%;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        margin: 0px;
        padding: 0px;
        color: #212529;
    }
    
    a {
        text-decoration: none;
        color: #212529;
    }
    
    .page-row {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        align-items: center;
        text-align: center;
    }
    
    .page-content {
        width: 100%;
        text-align: center;
    }
    
    .page-title {
        font-size: 150px;
        margin-top: -100px;
    }
    
    .page-description {
        color: #868e96;
        font-size: 16px;
    }
    
    .page-description p {
        padding: 0px;
        margin: 0px;
    }
    
    @media(max-width: 768px) {
        .page-title {
            font-size: 100px;
            margin-top: -70px;
        }
    }
</style>

<body>
    <div class="page-row">
        <div class="page-content">
            <div class="page-title">
                OPPS!
            </div>
            <div class="page-description">
                <p>404 page not found, <a href="<?=site_url();?>">go back.</a></p>
            </div>
        </div>
    </div>
</body>

</html>

<?php die(); ?>