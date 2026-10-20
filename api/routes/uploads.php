<?php
declare(strict_types=1);

route('POST', '/admin/uploads', function () {
    require_user();
    return ['url' => handle_image_upload('file')];
});
